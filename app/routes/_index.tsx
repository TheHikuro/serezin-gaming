import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Serezin Gaming" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
   <div>Bonjour</div>
  );
}
