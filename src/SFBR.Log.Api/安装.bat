@ECHO OFF
cd /d %~dp0
echo ��ʼ��װ...
dotnet SFBR.Log.Api.dll install
ECHO.
ECHO ��װ���������������...
dotnet SFBR.Log.Api.dll start
ECHO.
ECHO ��װ���
pause