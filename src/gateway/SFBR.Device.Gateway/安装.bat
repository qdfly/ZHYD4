@ECHO OFF
cd /d %~dp0
echo ��ʼ��װ...
dotnet SFBR.Device.Gateway.dll install
ECHO.
ECHO ��װ���������������...
dotnet SFBR.Device.Gateway.dll start
ECHO.
ECHO ��װ���
pause