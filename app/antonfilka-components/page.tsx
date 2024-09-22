import { Button } from "@antonfilka/button";
import { Icon } from "@antonfilka/icon";
import { Input } from "@antonfilka/input";

export default function Components() {
  return (
    <div className="grid gap-5 w-20 p-10">
      <Input placeholder="this is my input" />
      <Button />
      <Icon icon="FaAngular" size="4em" />
    </div>
  );
}
