@ECHO OFF
cd /d %~dp0
echo ����ֹͣ����...
dotnet SFBR.Terminal.Web.dll stop
echo.
echo ����ֹͣ��ʼж��...
dotnet SFBR.Terminal.Web.dll uninstall
echo.
ECHO ж�����
pause