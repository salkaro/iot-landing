
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

const CodeBlockExample = () => {
    return (
        <div className="rounded-lg border bg-background">
            <div className="flex items-center justify-between border-b bg-muted px-4 py-2">
                <div></div>
                <Button variant="ghost" size="icon" className="hover:bg-muted/50 text-muted-foreground">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy code</span>
                </Button>
            </div>
            <div className="p-4 font-mono text-sm leading-6 text-foreground">
                <pre className="language-javascript overflow-x-auto whitespace-pre max-w-full">
                    <code>{`curl -X POST "https://api.salkaro.com/v1/upload?org_id={org_id}&sensor_id={sensor_id}" 
  -H "Content-Type: application/json" 
  -H "Authorization: Bearer API_KEY" 
  -d '{
    "value": 28,
    "status": "OK",
    "timestamp": 1752696307
}'

`}</code>
                </pre>
            </div>
        </div>
    )
}



export default CodeBlockExample



