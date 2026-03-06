// Enhanced JavaScript for Java Programming Problems Documentation
// Auto-generated complete problem database from DS folder

class ProblemManager {
    constructor() {
        this.problemsData = {};
        this.currentProblem = null;
        this.currentCategory = null;
        this.initializeProblems();
        this.generateDynamicSidebar(); // Generate sidebar from loaded problems  
        this.setupEventListeners();
    }

    // Initialize all problems from DS folder - AUTO-GENERATED
    initializeProblems() {
        // Use external problemsData if available (from problems-data.js), otherwise use embedded data
        if (typeof problemsData !== 'undefined') {
            this.problemsData = problemsData;
            console.log('📊 Loaded problems from external problems-data.js');
        } else {
            // Fallback embedded data for demonstration
            this.problemsData = this.getEmbeddedProblems();
            console.log('📊 Using embedded sample problems');
        }
        
        const problemCount = Object.keys(this.problemsData).length;
        console.log(`✅ Total problems loaded: ${problemCount}`);
    }

    // Embedded problems as fallback
    getEmbeddedProblems() {
        return {
    problem01: {
        title: "Problem 01: Prime Number",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "A Java program for prime number.",
        code: `public class Problem01_PrimeNumber {
    public static void main(String[] args) {
        int num = 13;
        boolean isPrime = true;
        for (int i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            System.out.println(num + " is a prime number");
        } else {
            System.out.println(num + " is not a prime number");
        }
    }
}`,
        output: `13 is a prime number`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    problem02: {
        title: "Problem 02: Factorial",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "A Java program for factorial.",
        code: `import java.util.Scanner;
public class Problem02_Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int fact = 1;
        for (int i=1; i<=num; i++){
            fact = fact * i;
        }
        System.out.println("Factorial of " + num + " is: " + fact);
    }
}`,
        output: `Input: 5
Factorial of 5 is: 120`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    problem03: {
        title: "Problem 03: Even Odd Count",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "A Java program for even odd count.",
        code: `public class Problem03_EvenOddCount {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5,6,7};
        int countEven=0,countOdd=0;
        for (int i =0; i <arr.length;i++){
            if (arr[i]%2==0){
                countEven++;
            }
            else{
                countOdd++;
            }
        }
        System.out.println("Even Count :"+countEven);
        System.out.println("Odd Count :"+countOdd);
    }
}`,
        output: `Even Count :3
Odd Count :4`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    problem04: {
        title: "Problem 04: Even Odd Checker",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "A Java program for even odd checker.",
        code: `import java.util.Scanner;
public class Problem04_EvenOddChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        if (num % 2 == 0) {
            System.out.println(num + " is an Even number");
        } else {
            System.out.println(num + " is an Odd number");
        }
        sc.close();
    }
}`,
        output: `Enter a number: 7
7 is an Odd number`,
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },
    problem05: {
        title: "Problem 05: Palindrome Number",
        difficulty: "Easy",
        category: "Basic Programming",
        description: "A Java program for palindrome number.",
        code: `import java.util.Scanner;
public class Problem05_PalindromeNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        int originalNum = num;
        int reversedNum = 0;
        while (num > 0) {
            int digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = num / 10;
        }
        if (originalNum == reversedNum) {
            System.out.println(originalNum + " is a Palindrome number");
        } else {
            System.out.println(originalNum + " is not a Palindrome number");
        }
        sc.close();
    }
}`,
        output: `Enter a number: 121
121 is a Palindrome number`,
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    problem21: {
        title: "Problem 21: Linear Search",
        difficulty: "Easy",
        category: "Array Operations",
        description: "A Java program for linear search.",
        code: `import java.util.Scanner;
public class Problem21_LinearSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.print("Enter element to search: ");
        int searchElement = sc.nextInt();
        int position = linearSearch(arr, searchElement);
        if (position != -1) {
            System.out.println("Element " + searchElement + " found at position " + (position + 1));
        } else {
            System.out.println("Element " + searchElement + " not found in the array");
        }
        sc.close();
    }
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
}`,
        output: `Enter the number of elements: 5
Enter 5 elements: 10 20 30 40 50
Enter element to search: 30
Element 30 found at position 3`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    problem41: {
        title: "Problem 41: Anagram String",
        difficulty: "Medium",
        category: "String Operations",
        description: "A Java program for anagram string.",
        code: `import java.util.Arrays;
import java.util.Scanner;
public class Problem41_AnagramString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();
        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();
        str1 = str1.replaceAll("\\\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\\\s", "").toLowerCase();
        if (str1.length() != str2.length()) {
            System.out.println("Strings are NOT anagrams.");
        } else {
            char[] arr1 = str1.toCharArray();
            char[] arr2 = str2.toCharArray();
            Arrays.sort(arr1);
            Arrays.sort(arr2);
            if (Arrays.equals(arr1, arr2)) {
                System.out.println("Strings are Anagrams!");
            } else {
                System.out.println("Strings are NOT anagrams.");
            }
        }
    }
}`,
        output: `Enter first string: listen
Enter second string: silent
Strings are Anagrams!`,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)"
    },
    problem61: {
        title: "Problem 61: Square Pattern",
        difficulty: "Easy",
        category: "Pattern Programs",
        description: "A Java program for square pattern.",
        code: `import java.util.Scanner;
public class Problem61_SquarePattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows for the pattern: ");
        int rows = sc.nextInt();
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= rows; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
        output: `* * * * * 
* * * * *
* * * * *
* * * * *
* * * * *`,
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    }
        };
    }

    // Generate sidebar dynamically based on loaded problems
    generateDynamicSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;

        // Group problems by category
        const categories = {};
        Object.entries(this.problemsData).forEach(([key, problem]) => {
            const category = problem.category || 'Other';
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push({ key, ...problem });
        });

        // Generate sidebar HTML
        let sidebarHTML = '<div class="sidebar-header"><h2>Categories</h2></div>';
        
        const categoryIcons = {
            'Basic Programming': 'fas fa-play-circle',
            'Array Operations': 'fas fa-list',
            'String Operations': 'fas fa-font',
            'Pattern Programs': 'fas fa-shapes',
            'Advanced Problems': 'fas fa-cog',
            'Other': 'fas fa-code'
        };

        Object.entries(categories).forEach(([categoryName, problems]) => {
            const icon = categoryIcons[categoryName] || 'fas fa-code';
            const problemCount = problems.length;
            
            sidebarHTML += `
                <div class="category-section active">
                    <div class="category-title" onclick="toggleCategory(this.parentElement)">
                        <i class="${icon}"></i> ${categoryName} (${problemCount})
                    </div>
                    <div class="problem-list">`;
                    
            // Sort problems by their key (problem01, problem02, etc.)
            problems.sort((a, b) => {
                const numA = parseInt(a.key.replace('problem', ''));
                const numB = parseInt(b.key.replace('problem', ''));
                return numA - numB;
            });
            
            problems.forEach(problem => {
                const problemNumber = problem.key.replace('problem', '');
                const displayNumber = problemNumber.padStart(2, '0');
                const shortTitle = problem.title.replace(/^Problem \d+:\s*/, '');
                
                sidebarHTML += `
                    <div class="problem-item" onclick="showProblem('${problem.key}')">
                        ${displayNumber}. ${shortTitle}
                    </div>`;
            });
            
            sidebarHTML += `</div></div>`;
        });

        sidebar.innerHTML = sidebarHTML;
        console.log(`📋 Generated dynamic sidebar with ${Object.keys(categories).length} categories`);
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            // Sidebar toggle functionality
            const sidebarToggle = document.getElementById('sidebarToggle');
            const sidebar = document.getElementById('sidebar');
            
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', function() {
                    sidebar.classList.toggle('active');
                });
            }
            
            // Close sidebar when clicking outside on mobile
            document.addEventListener('click', function(e) {
                if (window.innerWidth <= 768 && 
                    sidebar && !sidebar.contains(e.target) && 
                    sidebarToggle && !sidebarToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            });
            
            // Expand all sections by default
            document.querySelectorAll('.category-section').forEach(section => {
                section.classList.add('active');
            });
            
            // Show welcome section by default
            const welcome = document.getElementById('welcome');
            if (welcome) {
                welcome.classList.add('active');
            }
        });
    }

    showProblem(problemId) {
        const problemData = this.problemsData[problemId];
        
        if (problemData) {
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all problem items
            document.querySelectorAll('.problem-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked problem
            const problemElement = document.querySelector(`[onclick="problemManager.showProblem('${problemId}')"]`);
            if (problemElement) {
                problemElement.classList.add('active');
            }
            
            // Populate problem template with data
            const elements = {
                'problemTitle': problemData.title,
                'problemDifficulty': problemData.difficulty,
                'problemCategory': problemData.category,
                'problemDesc': problemData.description,
                'problemCode': problemData.code,
                'problemOutput': problemData.output,
                'timeComplexity': problemData.timeComplexity,
                'spaceComplexity': problemData.spaceComplexity
            };
            
            Object.keys(elements).forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = elements[id];
                }
            });
            
            // Show problem template
            const problemTemplate = document.getElementById('problemTemplate');
            if (problemTemplate) {
                problemTemplate.classList.add('active');
            }
            
            // Re-highlight code
            if (typeof Prism !== 'undefined') {
                Prism.highlightAll();
            }
            
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) {
                    sidebar.classList.remove('active');
                }
            }
            
            // Scroll to top of content
            const mainContent = document.getElementById('mainContent');
            if (mainContent) {
                mainContent.scrollTop = 0;
            }
        }
    }

    showWelcome() {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        document.querySelectorAll('.problem-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const welcome = document.getElementById('welcome');
        if (welcome) {
            welcome.classList.add('active');
        }
    }

    toggleCategory(categoryElement) {
        categoryElement.classList.toggle('active');
    }

    searchProblems() {
        const searchBox = document.getElementById('search-box');
        if (!searchBox) return;
        
        const searchTerm = searchBox.value.toLowerCase();
        const problemItems = document.querySelectorAll('.problem-item');

        problemItems.forEach(item => {
            const problemText = item.textContent.toLowerCase();
            if (problemText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    copyCode() {
        const codeElement = document.getElementById('problemCode');
        if (codeElement && navigator.clipboard) {
            navigator.clipboard.writeText(codeElement.textContent).then(() => {
                // Visual feedback
                const copyBtn = document.querySelector('.copy-btn');
                if (copyBtn) {
                    const originalHtml = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    copyBtn.style.background = '#28a745';
                    
                    setTimeout(() => {
                        copyBtn.innerHTML = originalHtml;
                        copyBtn.style.background = '';
                    }, 2000);
                }
            }).catch(err => {
                console.error('Copy failed:', err);
                alert('Failed to copy code to clipboard');
            });
        }
    }
}

// Create global instance
const problemManager = new ProblemManager();

// Global functions for HTML onclick events
function showProblem(problemId) {
    problemManager.showProblem(problemId);
}

function showWelcome() {
    problemManager.showWelcome();
}

function toggleCategory(element) {
    problemManager.toggleCategory(element);
}

function searchProblems() {
    problemManager.searchProblems();
}

function copyCode() {
    problemManager.copyCode();
}

// Additional event listeners
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('active');
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('active');
        }
    }
    
    // Ctrl+F to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        const searchBox = document.getElementById('search-box');
        if (searchBox) {
            searchBox.focus();
        }
    }
});

console.log('Java Programming Problems Documentation System with All DS Programs Loaded!');