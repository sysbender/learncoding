import pytest


def test_ini(request):
    rootdir = request.config.rootdir
    print(f"rootdir = {rootdir}")
