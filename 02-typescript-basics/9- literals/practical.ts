// 1. string literal
let directionValue: "up" | "down" = "up";
console.log(directionValue);

// 2. number literal
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6 = 6;
console.log(diceRoll);

// 3. boolean literal
const alwaysTrue: true = true;
console.log(alwaysTrue);

// 4. status literal union
type Status = "pending" | "approved" | "rejected";
const requestStatus: Status = "approved";
console.log(requestStatus);

// 5. literal function parameter
function alignText(alignment: "left" | "center" | "right"): string {
  return `Text aligned ${alignment}`;
}
console.log(alignText("center"));

// 6. as const object
const routes = {
  home: "/",
  profile: "/profile",
} as const;
console.log(routes.profile);

// 7. derive literals from array
const roles = ["admin", "editor", "viewer"] as const;
type Role = (typeof roles)[number];
const currentRole: Role = "editor";
console.log(currentRole);

// 8. literal return values
function getTheme(hour: number): "light" | "dark" {
  return hour >= 18 ? "dark" : "light";
}
console.log(getTheme(20));

// 9. config with exact mode
type Config = { mode: "development" | "production"; debug: boolean };
const config: Config = { mode: "development", debug: true };
console.log(config);

// 10. discriminated literals
type AppNotification =
  | { type: "sms"; phone: string }
  | { type: "email"; email: string };
function notificationTarget(notification: AppNotification): string {
  return notification.type === "email" ? notification.email : notification.phone;
}
console.log(notificationTarget({ type: "email", email: "a@b.com" }));
