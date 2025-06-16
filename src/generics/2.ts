type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  TT extends Pick<AllType, "name" | "color">,
  BT extends Pick<AllType, "position" | "weight">
>(top: TT, bottom: BT): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
