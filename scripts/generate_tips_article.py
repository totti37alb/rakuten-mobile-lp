# -*- coding: utf-8 -*-
"""
Totti's Tips のスコアCSVから、日付指定でLP用の予想記事Markdownを生成する。

使い方:
    python scripts/generate_tips_article.py <CSVパス> <YYYY-MM-DD>

出力:
    content/articles/<YYYY-MM-DD>-ai-tips.md（category: 競馬AI）
"""
import csv
import sys
import os
from collections import defaultdict

MARK_ORDER = ["◎", "〇", "▲", "△", "☆", "注"]


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    csv_path, date = sys.argv[1], sys.argv[2]

    races = defaultdict(list)  # (course, raceNumInt) -> rows
    meta = {}
    with open(csv_path, encoding="utf-8-sig") as f:
        for r in csv.DictReader(f):
            if not r["raceId"].startswith(date):
                continue
            if r["mark"] not in MARK_ORDER:
                continue
            num = int(r["raceNum"].rstrip("R"))
            key = (r["courseName"], num)
            races[key].append(r)
            meta[key] = (r["raceName"], r["type"], r["distance"], r["condition"])

    if not races:
        print(f"{date} のデータがCSVにありません")
        sys.exit(1)

    courses = []
    for c, _ in sorted(races.keys()):
        if c not in courses:
            courses.append(c)

    m, d = int(date[5:7]), int(date[8:10])
    n_races = len(races)
    course_label = "・".join(courses)

    title = f"【{m}月{d}日】競馬AI予想印｜{course_label} 全{n_races}レース"
    excerpt = (
        f"自作AIによる{m}月{d}日の予想印。{course_label}の全{n_races}レース、"
        "◎〇▲△☆注をまとめて公開。"
    )

    lines = [
        "---",
        f'title: "{title}"',
        f'date: "{date}"',
        f'excerpt: "{excerpt}"',
        'emoji: "🏇"',
        'category: "競馬AI"',
        "---",
        "",
        f"週末恒例、自作AIの予想印です。{m}月{d}日の{course_label}、全{n_races}レース分。",
        "",
        "netkeibaの馬柱とコースバイアスをスコア化して、上位6頭に◎〇▲△☆注を機械的に打っています。"
        "人の感想は入っていません。AIの出力そのままです。",
        "",
    ]

    for course in courses:
        lines.append(f"## {course}")
        lines.append("")
        for (c, num), rows in sorted(races.items()):
            if c != course:
                continue
            name, rtype, dist, cond = meta[(c, num)]
            surface = "芝" if rtype == "芝" else ("ダ" if "ダ" in rtype else rtype)
            lines.append(f"**{num}R {name}（{surface}{dist}m・{cond}）**")
            rows_by_mark = {r["mark"]: r for r in rows}
            parts = []
            for mk in MARK_ORDER:
                r = rows_by_mark.get(mk)
                if r:
                    parts.append(f"{mk}{r['post_number']} {r['name']}")
            lines.append(" ／ ".join(parts))
            lines.append("")
        lines.append("---")
        lines.append("")

    lines += [
        "印はスコア順です。買い方は人それぞれですが、自分は◎〇のワイドと、◎から印への馬連を少額で遊ぶことが多いです。",
        "",
        "*※ AIによる機械的な予想であり、的中を保証するものではありません。馬券の購入は余裕資金の範囲で。20歳未満の方は馬券を購入できません。*",
        "*※ 本記事はtotti（楽天グループ社員）が個人として作成したものです。*",
        "",
    ]

    out_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "content", "articles")
    out_path = os.path.join(out_dir, f"{date}-ai-tips.md")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"generated: {out_path} ({n_races} races, {course_label})")


if __name__ == "__main__":
    main()
