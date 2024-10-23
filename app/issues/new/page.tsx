"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiInfoCircle } from "react-icons/bi";
import SimpleMDE from "react-simplemde-editor";

interface Issue {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<Issue>();
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <div className="max-w-3xl">
      {error && (
        <Callout.Root color="red" className="mb-3">
          <Callout.Icon>
            <BiInfoCircle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("unexpected error occurred");
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>Submit new Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
