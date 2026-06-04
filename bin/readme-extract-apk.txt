
========================
UNITY APK RECOVERY GUIDE
========================

1. EXTRACT APK
--------------
Rename:
game.apk

to:
game.zip

Extract it.


2. CHECK BUILD TYPE
-------------------

Go to:
assets/bin/Data/Managed/

If you see:
Assembly-CSharp.dll

= MONO BUILD
= EASY RECOVERY


3. INSTALL DNSPYEX
------------------

Download:
https://github.com/dnSpyEx/dnSpy/releases

Download:
dnSpy-net-win64.zip

Extract ZIP.

Run:
dnSpy.exe


4. OPEN DLL
-----------

Inside dnSpy:

File -> Open

Open:
assets/bin/Data/Managed/Assembly-CSharp.dll


5. EXPORT C# SCRIPTS
--------------------

In dnSpy:

File -> Export to Project

Choose folder:
RecoveredScripts/

This exports reconstructed C# files.


6. INSTALL ASSETRIPPER
----------------------

Download:
https://github.com/AssetRipper/AssetRipper/releases

Download:
AssetRipper_win_x64.zip

Extract.

Run:
AssetRipper.GUI.Free.exe


7. LOAD APK INTO ASSETRIPPER
----------------------------

File -> Open Folder

Choose extracted APK folder.


8. EXPORT UNITY PROJECT
------------------------

Export -> Export Project

Choose:
RecoveredUnityProject/


9. OPEN IN UNITY HUB
--------------------

Install matching Unity version.

Open:
RecoveredUnityProject/


10. COPY BACK SCRIPTS
---------------------

Copy exported scripts from:
RecoveredScripts/

into:
Assets/Scripts/


11. THINGS YOU MAY RECOVER
--------------------------

- C# scripts
- textures
- audio
- scenes
- prefabs
- materials
- animations
- UI


12. THINGS YOU MAY LOSE
-----------------------

- comments
- exact folder structure
- lighting data
- git history
- some settings


13. IF DLL IS VERY SMALL
------------------------

If:
Assembly-CSharp.dll

is only few KB,
possible reasons:

- very small game
- scripts in other DLLs
- obfuscation
- external logic


14. SEARCH THESE FILES TOO
--------------------------

Search:
Assembly-

Check for:
Assembly-CSharp-firstpass.dll


15. COMMON UNITY APK PATHS
--------------------------

Scripts:
assets/bin/Data/Managed/

IL2CPP:
lib/arm64-v8a/libil2cpp.so

Metadata:
assets/bin/Data/Managed/Metadata/


16. IF IL2CPP BUILD
-------------------

Need:
- Il2CppDumper
- Cpp2IL

Download:
https://github.com/Perfare/Il2CppDumper/releases
https://github.com/SamboyCoding/Cpp2IL/releases


17. BEST RECOVERY WORKFLOW
--------------------------

dnSpyEx
= recover code

AssetRipper
= recover assets/project

Unity
= rebuild game


18. QUICK TEST
---------------

If dnSpy shows:
PlayerController
GameManager
EnemyAI

then recovery chance is GOOD