from django.contrib import admin
from .models import Post # model 파일의 Post 객체 import

admin.site.register(Post) # 관리자 페이지에서 Post 모델 확인

# Register your models here.
