
class Circulo: 
    
    def calcula_area_circle(self, diametro):
        self.diametro = diametro
        raio = self.diametro / 2
        PI = 3.14
        result = PI * (raio * raio) 
        
        return result
        
meu_calculo2 = Circulo()

print(meu_calculo2.calcula_area_circle(16))