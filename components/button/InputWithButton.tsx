import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SmileIcon } from "lucide-react"

export function InputWithButton() {
  return (
    <div className="relative left-0 flex w-full max-w-sm items-center space-x-2 text-white">
      <Input type="text" placeholder="Write message...." />
      <Button type="submit">Send</Button>
      <SmileIcon
          aria-hidden="true"
          className=" absolute left-3 top-5 transform -translate-y-1/2 text-[#709CE6] hover:text-gray-700 "
          size={20}
        />
    </div>
  )
}
