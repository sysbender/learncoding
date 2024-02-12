// utility type

// partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

function updateAssignment(
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment {
  return { ...assign, ...propsToUpdate };
}

const assign1: Assignment = { studentId: "comp123", title: "Final", grade: 0 };
const assign2 = updateAssignment(assign1, { grade: 4.5 });
console.log(assign2);
