import { v4 as uuid } from "uuid";
import { Cart, User } from "./types";

export const users = {} as Record<string, User>;

export const carts = {} as Record<string, Cart>;

export const access = {} as Record<string, string[]>;

export const products = [
  {
    id: uuid(),
    name: "What is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    price: 150,
  },
  {
    id: uuid(),
    name: "Why do we use it?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page",
    price: 225,
  },
  {
    id: uuid(),
    name: "Where does it come from?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    price: 340,
  },
  {
    id: uuid(),
    name: "Where can I get some?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
    price: 75,
  },
  {
    id: uuid(),
    name: "The standard Lorem Ipsum passage, used since the 1500s",
    description:
      "ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat",
    price: 100,
  },
  {
    id: uuid(),
    name: "Section 1.10.33 of",
    description:
      "non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe",
    price: 500,
  },
];
