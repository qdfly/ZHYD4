@ECHO OFF
cd /d %~dp0
echo ��ʼ��װ...
dotnet SFBR.Data.Api.dll install
ECHO.
ECHO ��װ���������������...
dotnet SFBR.Data.Api.dll start
ECHO.
ECHO ��װ���
pause