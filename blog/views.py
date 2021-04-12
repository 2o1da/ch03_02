from django.shortcuts import render

# Create your views here.
defpost_list(request):
    return render(request, 'blog/post_list.html', {})
