export const copyToClipboard = async (s: string): Promise<void> => {
  try {
    return await navigator.clipboard.writeText(s);
  } catch (e) {
    alert(e);
  }
}
