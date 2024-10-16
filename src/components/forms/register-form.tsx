import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const formSchema = z.object({
  teamname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  county: z.string().min(2, {
    message: "County must be at least 2 characters.",
  }),
  contact: z.string().min(2, {
    message: "Contact must be at least 2 characters.",
  }),
  contactPerson: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

const categories = [
  {
    id: "1",
    label: "u5",
  },
  {
    id: "2",
    label: "u7",
  },
  {
    id: "3",
    label: "u9",
  },
  {
    id: "4",
    label: "u11",
  },
  {
    id: "5",
    label: "u13",
  },
  {
    id: "6",
    label: "u15",
  },
  {
    id: "7",
    label: "u17",
  },
  {
    id: "8",
    label: "u20",
  },
] as const;

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamname: "",
      country: "",
      county: "",
      contact: "",
      contactPerson: "",
      categories: ["u9", "u13"],
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="space-y-6">
        <p className="bg-red-400 p-2">Registration to start in November</p>

        <FormField
          control={form.control}
          name="teamname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teamname</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="county"
            render={({ field }) => (
              <FormItem>
                <FormLabel>County</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="categories"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Category</FormLabel>
                <FormDescription>
                  Select the categories you want to enter.
                </FormDescription>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {categories.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="categories"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <Button type="submit">Register</Button> */}
      </form>
    </Form>
  );
};

export default RegisterForm;
