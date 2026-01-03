"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Pricing = () => {
    const router = useRouter();
    return (
        <div id="pricing" className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="flex text-center justify-center items-center gap-4 flex-col">
                    <Badge>Pricing</Badge>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                            Prices that make sense!
                        </h2>
                        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                            Managing a small business today is already tough.
                        </p>
                    </div>
                    <div className="grid text-left w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 divide-x pt-20 space-y-24 sm:space-y-12 lg:gap-0">
                        {/* spacer for labels */}
                        <div className="hidden lg:block lg:col-span-1"></div>

                        {/* Free */}
                        <div className="grid grid-rows-12 px-3 py-1 md:px-6 md:py-4 gap-2 max-h-64">
                            <p className="row-span-3 text-2xl">Free</p>
                            <p className="row-span-3 text-sm text-muted-foreground">
                                Perfect to try out the basics
                            </p>
                            <p className="row-span-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xl mt-8">
                                <span className="text-4xl">$0</span>
                                <span className="text-sm text-muted-foreground">/ month</span>
                            </p>
                            <Button variant="outline" className="row-span-2 gap-4 mt-8" onClick={() => router.push("https://app.salkaro.com/sign-up")}>
                                Get started
                            </Button>
                        </div>

                        {/* Hobby */}
                        <div className="grid grid-rows-12 px-3 py-1 md:px-6 md:py-4 gap-2 max-h-64">
                            <p className="row-span-3 text-2xl">Hobby</p>
                            <p className="row-span-3 text-sm text-muted-foreground">
                                For curious minds and side projects
                            </p>
                            <p className="row-span-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xl mt-8">
                                <span className="text-4xl">$15</span>
                                <span className="text-sm text-muted-foreground">/ month</span>
                            </p>
                            <Button variant="outline" className="row-span-2 gap-4 mt-8" onClick={() => router.push("https://app.salkaro.com/sign-up")}>
                                Start trial
                            </Button>
                        </div>

                        {/* Essential */}
                        <div className="grid grid-rows-12 px-3 py-1 md:px-6 md:py-4 gap-2 max-h-64">
                            <p className="row-span-3 text-2xl">Essential</p>
                            <p className="row-span-3 text-sm text-muted-foreground">
                                For growing teams and serious builders
                            </p>
                            <p className="row-span-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xl mt-8">
                                <span className="text-4xl">$49</span>
                                <span className="text-sm text-muted-foreground">/ month</span>
                            </p>
                            <Button className="row-span-2 gap-4 mt-8" onClick={() => router.push("https://app.salkaro.com/sign-up")}>
                                Subscribe
                            </Button>
                        </div>

                        {/* Pro */}
                        <div className="grid grid-rows-12 px-3 py-1 md:px-6 md:py-4 gap-2 max-h-64">
                            <p className="row-span-3 text-2xl">Pro</p>
                            <p className="row-span-3 text-sm text-muted-foreground">
                                For high‑performance workflows and scale
                            </p>
                            <p className="row-span-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xl mt-8">
                                <span className="text-4xl">$99</span>
                                <span className="text-sm text-muted-foreground">/ month</span>
                            </p>
                            <Button className="row-span-2 gap-4 mt-8" onClick={() => router.push("https://app.salkaro.com/sign-up")}>
                                Subscribe
                            </Button>
                        </div>

                        {/* Enterprise */}
                        <div className="grid grid-rows-12 px-3 py-1 md:px-6 md:py-4 gap-2 max-h-64">
                            <p className="row-span-3 text-2xl">Enterprise</p>
                            <p className="row-span-3 text-sm text-muted-foreground">
                                For large-scale operations and custom needs
                            </p>
                            <p className="row-span-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xl mt-8">
                                <span className="text-4xl">$199</span>
                                <span className="text-sm text-muted-foreground">/ month</span>
                            </p>
                            <Button className="row-span-2 gap-4 mt-8" onClick={() => router.push("https://app.salkaro.com/sign-up")}>
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    {/* Features matrix */}
                    <div className="hidden md:grid text-center w-full grid-cols-1 sm:grid-cols-6 lg:grid-cols-6 divide-x mt-12">
                        {/* feature labels */}
                        <div className="flex flex-col text-left font-semibold">
                            <div className="py-4">Features</div>
                            <div className="py-4">Sensors</div>
                            <div className="py-4">Data Points</div>
                            <div className="py-4">Data Retention</div>
                            <div className="py-4">Team Members</div>
                        </div>

                        {/* Free column */}
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-semibold lg:hidden mb-2">Free</p>
                            <Check className="w-4 h-4 text-primary" />
                            <div className="py-4">2</div>
                            <div className="py-4">10 k</div>
                            <div className="py-4">7 days</div>
                            <div className="py-4">1 member</div>
                        </div>

                        {/* Hobby column */}
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-semibold lg:hidden mb-2">Hobby</p>
                            <Check className="w-4 h-4 text-primary" />
                            <div className="py-4">5</div>
                            <div className="py-4">100 k</div>
                            <div className="py-4">30 days</div>
                            <div className="py-4">3 members</div>
                        </div>

                        {/* Essential column */}
                        <div className="flex flex-col items-center justify-center bg-primary/5">
                            <p className="font-semibold lg:hidden mb-2">Essential</p>
                            <Check className="w-4 h-4 text-primary" />
                            <div className="py-4">20</div>
                            <div className="py-4">1 M</div>
                            <div className="py-4">90 days</div>
                            <div className="py-4">10 members</div>
                        </div>

                        {/* Pro column */}
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-semibold lg:hidden mb-2">Pro</p>
                            <Check className="w-4 h-4 text-primary" />
                            <div className="py-4">100</div>
                            <div className="py-4">10 M</div>
                            <div className="py-4">180 days</div>
                            <div className="py-4">50 members</div>
                        </div>

                        {/* Enterprise column */}
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-semibold lg:hidden mb-2">Enterprise</p>
                            <Check className="w-4 h-4 text-primary" />
                            <div className="py-4">1000</div>
                            <div className="py-4">1 B</div>
                            <div className="py-4">12 months</div>
                            <div className="py-4">Unlimited</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};