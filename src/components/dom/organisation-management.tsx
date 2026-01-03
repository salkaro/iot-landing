import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const OrganisationManagement = () => (
    <div id="organisation-management" className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
            <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
                <div>
                    <Badge>Organisation</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                        Manage Teams, Permissions, and Devices with Ease
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                        Control user access, assign roles, and organize device visibility across teams. Whether you&apos;re managing a small crew or a distributed enterprise, our platform gives you secure and flexible organization-level control.
                    </p>
                </div>
                <div className="flex gap-10 pt-12 flex-col w-full">
                    <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
                        <div className="flex flex-row gap-6 w-full items-start">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>Role-based permissions</p>
                                <p className="text-muted-foreground text-sm">
                                    Assign custom roles and define who can access, edit, or control devices.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>Multi-user support</p>
                                <p className="text-muted-foreground text-sm">
                                    Invite team members and manage access at an organizational level.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>Device group management</p>
                                <p className="text-muted-foreground text-sm">
                                    Group devices by location, type, or project to keep everything organized.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>API key management</p>
                                <p className="text-muted-foreground text-sm">
                                    Generate and manage secure API keys for integrating devices and services.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>Secure access control</p>
                                <p className="text-muted-foreground text-sm">
                                    Ensure sensitive data and controls are only available to apporized users.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start">
                            <Check className="w-4 h-4 mt-2 text-primary" />
                            <div className="flex flex-col gap-1">
                                <p>Scalable organization structure</p>
                                <p className="text-muted-foreground text-sm">
                                    Built to grow with your team—whether you&apos;re 3 people or 300.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
