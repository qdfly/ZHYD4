@ECHO OFF
cd /d %~dp0
echo ����ֹͣ����...
dotnet SFBR.Log.Api.dll stop
echo.
echo ����ֹͣ��ʼж��...
dotnet SFBR.Log.Api.dll uninstall
echo.
ECHO ж�����
pause