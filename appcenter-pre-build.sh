#!/bin/bash

PROJECT_NAME=TabNews
ANDROID_GRADLE_FILE=$APPCENTER_SOURCE_DIRECTORY/android/gradle.properties
INFO_PLIST_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/$PROJECT_NAME/Info.plist
VERSION_CODE=$((VERSION_CODE_SHIFT + APPCENTER_BUILD_ID))

echo $PROJECT_NAME
echo $ANDROID_GRADLE_FILE
echo $INFO_PLIST_FILE
echo $VERSION_CODE

if [ "$APPCENTER_BRANCH" == "main" ];
then
    # Changing iOS version
    plutil -replace CFBundleVersion -string "$VERSION_CODE" $INFO_PLIST_FILE
    plutil -replace CFBundleShortVersionString -string "1.$APPCENTER_BUILD_ID.0" $INFO_PLIST_FILE

    # Changing Android version
    sed -i "" 's/VERSION_CODE=[0-9]*/VERSION_CODE='$VERSION_CODE'/' $ANDROID_GRADLE_FILE
    sed -i "" 's/VERSION_NAME=[1.0.0]*/VERSION_NAME='1.$APPCENTER_BUILD_ID.0'/' $ANDROID_GRADLE_FILE
fi