import CartContent from "@/components/cart/CartContent";
import { cookies } from "next/headers";

export default async function CartPage() {
  const cookieStore = await cookies();
  const isAuthorized = !!cookieStore.get("access_token")?.value;

  return <CartContent isAuthorized={isAuthorized} />;
}
