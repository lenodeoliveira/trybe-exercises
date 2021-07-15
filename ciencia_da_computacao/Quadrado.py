class Quadrado:
    
    def calculo_area_quadrado(self, sideA, sideB):
        self.sideA = sideA
        self.sideB = sideB
        
        return self.sideA * self.sideB
    def perimetro(self, sideA, sideB, sideC, sideD):
        self.sideA = sideA
        self.sideB = sideB
        self.sideC = sideC
        self.sideD = sideD
        
        return  self.sideA + self.sideB + self.sideC + self.sideD 
    
meu_calculo = Quadrado()

print(meu_calculo.calculo_area_quadrado(5, 5))
print(meu_calculo.perimetro(5, 5,2,2))