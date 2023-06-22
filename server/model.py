# from transformers import AutoTokenizer,AutoModelForSeq2SeqLM
# from transformers import pipeline
# from min_dalle import MinDalle
# import torch

# # MT model config
# mt_model_checkpoint = '../model/3tech-mt-ko-en'
# mt_tokenizer = AutoTokenizer.from_pretrained(mt_model_checkpoint)
# mt_model = AutoModelForSeq2SeqLM.from_pretrained(mt_model_checkpoint)

# # text3image config
# text2image_model = MinDalle(
#     models_root= '../model/3tech-text-2-image',
#     dtype=torch.float32,
#     device='cpu',
#     is_mega=True,
#     is_reusable=True
# )

# def image_generate(input, style):

#     translationxx_to_yy = pipeline("translation_xx_to_yy", model=mt_model, tokenizer=mt_tokenizer)
#     prompt = translationxx_to_yy(input)[0]['translation_text']
    
#     image = text2image_model.generate_image(
#         text=prompt + style,
#         seed=-1,
#         grid_size=1,
#         is_seamless=False,
#         temperature=1,
#         top_k=256,
#         supercondition_factor=32,
#         is_verbose=False
#     )

#     return image