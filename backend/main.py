from model.create_model import HateBert

model = HateBert()

test = input("테스트할 문장을 입력하세요:\n")
prob = model.predict_comment(test)
print("악플 확률:", prob)