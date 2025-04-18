<script setup lang="ts">
import {
  Button,
  FloatLabel,
  Message,
  InputText,
  Panel,
  Password,
  Divider,
} from "primevue";
import { LoginUserZod, type LoginUser } from "../../typings/User";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { isValid } from "../../utils/Forms";
import { loginService } from "./services";

const handleSubmit = async (event: FormSubmitEvent<Record<string, any>>) => {
  const loginUser = LoginUserZod.parse(event.values) as LoginUser;
  const response = await loginService(loginUser);
  console.log(response);

  
};
</script>

<template>
  <Panel class="w-full sm:w-3/5 md:w-108">
    <template #header>
      <h1 class="text-2xl font-medium">Login</h1>
    </template>
    <Divider />
    <template #footer>
      <Form
        v-slot="$form"
        @submit="handleSubmit"
        :resolver="zodResolver(LoginUserZod)"
      >
        <div class="grid grid-cols-1 gap-3 items-center">
          <FloatLabel variant="on">
            <InputText
              id="username_input"
              name="username"
              type="text"
              variant="filled"
              fluid
            />
            <Message
              v-if="$form.username?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.username.error?.message }}</Message
            >
            <label for="username_input">Username</label>
          </FloatLabel>
          <FloatLabel variant="on">
            <Password
              id="pwd_input"
              name="password"
              type="password"
              :feedback="false"
              variant="filled"
              fluid
              toggleMask
            />
            <Message
              v-if="$form.password?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.password.error?.message }}</Message
            >
            <label for="pwd_input">Password</label>
          </FloatLabel>
          <Button
            v-tooltip.bottom="{
              value: 'Please, provide a valid username and password',
              disabled: isValid($form),
            }"
            class="mt-3"
            type="submit"
            severity="secondary"
            label="Submit"
            :disabled="!isValid($form)"
            >Submit</Button
          >
        </div>
      </Form>
    </template>
  </Panel>
</template>

<style scoped>
.p-divider {
  margin: 0;
}
</style>
