from django.urls import path
from django.shortcuts import render

LINKS = [
    {
        "key": "telegram",
        "title": "Telegram kanal",
        "badge": "Asosiy kanal",
        "desc": "Standoff 2 uchun foydali narsalar, yangiliklar va yangilanishlar birinchi bo'lib shu yerda chiqadi.",
        "handle": "@babuincheats",
        "url": "https://t.me/babuincheats",
        "cta": "Obuna bo'lish",
    },
    {
        "key": "instagram",
        "title": "Instagram kanal",
        "badge": "Reels & Stories",
        "desc": "Standoff 2 bo'yicha zo'r kontent: qisqa videolar, lavhalar va kundalik yangiliklar.",
        "handle": "@babuin_so2",
        "url": "https://instagram.com/babuin_so2",
        "cta": "Kuzatish",
    },
]

def index(request):
    return render(request, "index.html", {"links": LINKS})

urlpatterns = [path("", index, name="index")]
