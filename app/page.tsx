import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[auto_1fr_1fr] items-baseline justify-items-baseline min-h-screen gap-16 p-10">
      <div className="col-span-3 text-center">
        <h1 className="text-3xl font-bold">Proof of concept</h1>
      </div>
      <Card className="max-w-[400px]">
        <CardHeader>
          <h2 className="text-base">Grids</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <Link
            isBlock
            showAnchorIcon
            href="/grid/responsive-layout"
            color="foreground"
          >
            Responsive layout
          </Link>
          <Link
            isBlock
            showAnchorIcon
            href="/grid/cards-layout"
            color="foreground"
          >
            Cards layout
          </Link>
          <Link
            isBlock
            showAnchorIcon
            href="/grid/messenger"
            color="foreground"
          >
            Messenger
          </Link>
        </CardBody>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader>
          <h2 className="text-base">Flex</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <Link
            isBlock
            showAnchorIcon
            href="/flex/playground"
            color="foreground"
          >
            Flex playground
          </Link>
        </CardBody>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader>
          <h2 className="text-lg">Other</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <Link
            isBlock
            showAnchorIcon
            href="/antonfilka-components"
            color="foreground"
          >
            Antonfilka components
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
