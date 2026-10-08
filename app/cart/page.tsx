"use client";
import Container from "@/components/container";
import AppButton from "@/components/ui/app-buttom";
import { ProductCardCart } from "@/components/ui/product-card";
import { Icon } from "@iconify/react";
import React from "react";
import {
  cartItemsCount,
  totalPriceCount,
  totalQuantityCount,
  useCartStore,
} from "../store/cart.store";

function Cart() {
  const items = useCartStore((state) => state.items);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const increaseItem = useCartStore((state) => state.increaseItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearcart = useCartStore((state) => state.clearCart);

  const totalQuantity = useCartStore(totalQuantityCount);
  const totalPrice = useCartStore(totalPriceCount);
  const cartItems = useCartStore(cartItemsCount);

  return (
    <div className={`${items.length === 0 ? "" : "py-32"}  bg-background`}>
      <Container>
        {items.length === 0 ? (
          <div className="h-screen flex flex-col gap-4 justify-center items-center soft-transition">
            <Icon
              icon="carbon:shopping-cart-clear"
              className="text-9xl text-foreground/80"
            />
            <span className="text-foreground/50 font-medium">
              Your Cart Is Empty
            </span>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-bold text-3xl">Your Cart</span>
              <span className="text-sm font-medium text-foreground/50">
                You are one step closer to your next adventure!
              </span>
            </div>
            <div className="bg-card rounded-2xl border p-4">
              <div className="flex justify-between items-center">
                <span className="block text-lg">Cart Items ({cartItems})</span>
                <div className="flex justify-center items-center gap-1 hover:text-error transition-all duration-300 cursor-pointer">
                  <Icon icon="fluent:delete-16-regular" className=" text-lg" />
                  <span onClick={clearcart}>Clear Cart</span>
                </div>
              </div>
              <hr className="my-3" />
              <div className="h-full sm:grid grid-cols-4 gap-4">
                <div className="col-span-3 flex flex-col gap-2">
                  {items.map((item) => (
                    <ProductCardCart
                      key={item._id}
                      props={item}
                      decreaseItem={() => decreaseItem(item._id)}
                      increaseItem={() => increaseItem(item._id)}
                      removeItem={() => removeItem(item._id)}
                    />
                  ))}
                </div>
                <div className="w-full h-fit bg-background rounded-2xl border fixed bottom-0 left-0 sm:sticky sm:top-32  p-4">
                  <div className=" items-center gap-1 hidden sm:flex">
                    <Icon icon="icon-park-outline:transaction-order" />
                    <span>Order Summary</span>
                  </div>
                  <hr className="my-3 hidden sm:block" />
                  <div className="flex justify-between items-center font-medium">
                    <span>Total ({totalQuantity} Travelers)</span>
                    <div className="flex items-center">
                      <Icon
                        width={24}
                        icon="boxicons:dollar"
                        className="text-primary"
                      />
                      <span className="text-xl text-primary">
                        {totalPrice}
                      </span>
                    </div>
                  </div>
                  <hr className="my-3 " />
                  <AppButton className="w-full">Proceed the checkout</AppButton>
                  <span className="text-center pt-3 text-foreground/50 text-sm hidden sm:block">
                    Secure and encrypted payment
                  </span>
                  <hr className="my-3 hidden sm:block" />
                  <div className="bg-primary/10 px-4 py-3 rounded-2xl  justify-center items-center gap-4 hidden sm:flex">
                    <Icon
                      icon="heroicons:receipt-refund"
                      className="text-5xl text-primary"
                    />
                    <div className="text-sm">
                      <span className="text-primary font-bold">
                        Free cancelation
                      </span>
                      <p className="text-foreground/50">
                        Change of plans? Cancel up to 24 hours before the tour
                        for a full refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Cart;
