import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

export async function logScreen(screenName: string | undefined) {
  try {
    await analytics().logScreenView({
      screen_name: screenName,
      screen_class: screenName,
    });
  } catch (error: any) {
    recordErrorCrashlytics(error);
  }
}

export function logCrashlytics(error: string) {
  crashlytics().log(error);
}

export function recordErrorCrashlytics(
  error: Error | any,
  jsError?: string | undefined,
) {
  crashlytics().recordError(error, jsError);
}
