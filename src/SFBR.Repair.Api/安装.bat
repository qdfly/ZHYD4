@ECHO OFF
cd /d %~dp0
echo ��ʼ��װ...
dotnet SFBR.Repair.Api.dll install
ECHO.
ECHO ��װ���������������...
dotnet SFBR.Repair.Api.dll start
ECHO.
ECHO ��װ���
pause