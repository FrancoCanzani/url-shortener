export async function copyToClipboard({
  textToCopy,
  onSuccess,
  onFailure,
}: {
  textToCopy: string;
  onSuccess?: () => void;
  onFailure?: (error: any) => void;
}) {
  try {
    await navigator.clipboard.writeText(textToCopy);
    onSuccess && onSuccess();
  } catch (err) {
    console.error('Failed to copy text:', err);
    onFailure && onFailure(err);
  }
}
