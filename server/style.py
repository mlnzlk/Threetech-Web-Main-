def style_prompt(style_type):
    if style_type == '웹툰':
        style = 'by webtoon style'
    elif style_type == '캐주얼':
        style = 'by casual style'
    elif style_type == '애니':
        style = 'by animation style'
    elif style_type == '일러스트':
        style = 'by illustration style'
    elif style_type == '풍경':
        style = 'by landscape painting style'

    return style
