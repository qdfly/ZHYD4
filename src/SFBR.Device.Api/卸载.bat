@ECHO OFF
cd /d %~dp0
echo ����ֹͣ����...
dotnet SFBR.Device.Api.dll stop
echo.
echo ����ֹͣ��ʼж��...
dotnet SFBR.Device.Api.dll uninstall
echo.
ECHO ж�����
pause