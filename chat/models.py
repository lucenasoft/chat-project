from datetime import datetime

from django.db import models


# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length=1000) #NOME DO SALA DO CHAT, PRIMEIRA PAGINA

    def __str__(self) -> str:
        return self.name

class Message(models.Model):
    value = models.CharField(max_length=1000000) #MENSAGEM 
    date = models.DateTimeField(default=datetime.now, blank=True) #DATA DA MENSAGEM
    user = models.CharField(max_length=1000000) #USUARIO SETADO NA PRIMEIRA PAGINA #FUNCIONARIO.
    room = models.CharField(max_length=1000000)
    paciente_name = models.CharField(max_length=1000000)
    arquivoPDF = models.CharField(max_length=10000)

    def __str__(self) -> str:
        return self.paciente_name

    def get_data_evento(self):
        return self.date.strftime('%d/%m/%y %H:%M Hrs')