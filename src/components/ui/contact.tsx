"use client"

import { CalendarIcon, Mail, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Page = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="w-full py-20 lg:py-40 min-h-screen">
            <div className="container max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <Badge variant="outline">Contact Us</Badge>
                            <h2 className="text-3xl md:text-5xl font-regular tracking-tighter">
                                Let’s build something great together
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                                Whether you need a demo, technical support, or just want to say hello,
                                our team is here to help. Pick your preferred way to reach out below.
                            </p>

                            <div className="flex flex-row gap-4 items-start">
                                <Mail className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <p className="font-semibold">Email Support</p>
                                    <p className="text-sm text-muted-foreground">support@salkaro.com</p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-4 items-start">
                                <Mail className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <p className="font-semibold">General Inquiries</p>
                                    <p className="text-sm text-muted-foreground">hello@salkaro.com</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="justify-center flex items-center">
                        <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
                            <p>Book a meeting</p>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <Label htmlFor="picture">Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full max-w-sm justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <Label htmlFor="picture">Upload resume</Label>
                                <Input id="picture" type="file" />
                            </div>

                            <Button className="gap-4 w-full">
                                Book the meeting <MoveRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page
