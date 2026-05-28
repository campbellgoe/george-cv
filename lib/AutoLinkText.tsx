import Link from 'next/link';

export default function AutoLinkText({ text, linkMap = {
    'Next.js': 'https://nextjs.org',
    'React': 'https://react.dev',
  } }: { text: string[]; linkMap:Record<string, string> }) {

  // 2. Create a dynamic Regex pattern based on your map keys
  const pattern = new RegExp(`(${Object.keys(linkMap).join('|')})`, 'gi');

  // 3. Split the text and map matches to next/link
  const parts = text.map((column, index) => {
    return <p>{column.split(pattern).map(part => {
      const matchedKey = part.toLowerCase();
      const href = linkMap[Object.keys(linkMap).find(k => k.toLowerCase() === matchedKey) || ''];

      if (href) {
        return (
          <Link key={index} href={href} style={{ color: 'blue', textDecoration: 'underline' }}>
            {part}
          </Link>
        );
      }
      return part;
    })}</p>
  });

  return parts;
}