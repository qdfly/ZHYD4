@ECHO OFF
cd /d %~dp0
echo ��ʼ��װ...
dotnet SFBR.Terminal.Web.dll install
ECHO.
ECHO ��װ���������������...
dotnet SFBR.Terminal.Web.dll start
ECHO.
ECHO ��װ���
pause