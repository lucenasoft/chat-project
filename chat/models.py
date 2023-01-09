from datetime import datetime

from django.db import models


# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length=1000) #NOME DO SALA DO CHAT, PRIMEIRA PAGINA
class Message(models.Model):
    value = models.CharField(max_length=1000000) #MENSAGEM 
    date = models.DateTimeField(default=datetime.now, blank=True) #DATA DA MENSAGEM
    user = models.CharField(max_length=1000000) #USUARIO SETADO NA PRIMEIRA PAGINA #FUNCIONARIO.
    room = models.CharField(max_length=1000000) #SALA É UM ID, SETADO ASSIM QUE ENVIADO A MENSAGEM