@ECHO OFF
cd /d %~dp0
echo ����ֹͣ����...
dotnet SFBR.Data.Api.dll stop
echo.
echo ����ֹͣ��ʼж��...
dotnet SFBR.Data.Api.dll uninstall
echo.
ECHO ж�����
pause