@ECHO OFF
cd /d %~dp0
echo ����ֹͣ����...
dotnet SFBR.Device.Gateway.dll stop
echo.
echo ����ֹͣ��ʼж��...
dotnet SFBR.Device.Gateway.dll uninstall
echo.
ECHO ж�����
pause