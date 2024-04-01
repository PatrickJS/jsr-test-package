export default function main(msg: string = ''): string {
  const message = 'jsr-test-package!' + msg;
  console.log(message);
  return message;
}
