@ECHO OFF
cd /d %~dp0
echo ����ֹͣ����...
dotnet SFBR.Repair.Api.dll stop
echo.
echo ����ֹͣ��ʼж��...
dotnet SFBR.Repair.Api.dll uninstall
echo.
ECHO ж�����
pause