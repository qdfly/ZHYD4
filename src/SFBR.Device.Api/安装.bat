@ECHO OFF
cd /d %~dp0
echo ��ʼ��װ...
dotnet SFBR.Device.Api.dll install
ECHO.
ECHO ��װ���������������...
dotnet SFBR.Device.Api.dll start
ECHO.
ECHO ��װ���
pause