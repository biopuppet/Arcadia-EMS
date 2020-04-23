from django.shortcuts import render


# 404
def page_not_found(request, exception="It looks like you may have taken a wrong turn..."):
    return render(request, '404.html', {'exception': exception})


# 500
def page_error(request):
    return render(request, '500.html')
