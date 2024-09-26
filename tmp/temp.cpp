#include <iostream>
#include <string>

int main() {
    // Equivalent of console.log('hello world!');
    std::cout << "hello world!" << std::endl;

    // Variables a and b
    int a = 5;
    int b = 4;

    // Equivalent of console.log('6' + (a + b))
    std::cout << "6" + std::to_string(a + b) << std::endl;

    // Equivalent of console.log('end');
    std::cout << "end" << std::endl;

    // Simulating console.table({a: 'b'})
    std::cout << "Table: { a: 'b' }" << std::endl;

    return 0;
}