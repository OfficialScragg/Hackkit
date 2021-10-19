from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html")

def dashboard(request):
    return render(request, "dashboard.html")

def profile(request):
    return render(request, "profile.html")

def decoder(request):
    return render(request, "decoder.html")

def wordlists(request):
    return render(request, "wordlists.html")

def cve(request):
    return render(request, "cve_search.html")

def convert(request):
    return render(request, "convert.html")