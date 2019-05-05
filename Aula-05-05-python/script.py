# name = 'junior'
# idade = 20

# name = input("Qual o seu nome?\n")
# print(name)

# def nome_e_idade(nome, sobrenome):
#     if nome == "junior":
#         print("oi")
#     elif nome == "mendes":
#         print("Errou")
#     else:
#         print("ua ameaça foi detectada")
#     return nome + " " + sobrenome

# nome_completo = nome_e_idade("johnny", "herbert")
# print(nome_completo)

# for number in range(0, 5):
#     print(number)

# for number in [1, 2, 3, 4, 5, 6]:
#     print(number)

class Animal:
    def __init__(self, name, sound):
        self.__name = name #com o _ o atributo fica privado
        self.sound = sound
    def emit_sound(self, repeats):
        for i in range(0, repeats):
            print(self.sound)

gato = Animal("gahrfield","Meoooowwww")
gato.emit_sound(5)
print(gato.name)
